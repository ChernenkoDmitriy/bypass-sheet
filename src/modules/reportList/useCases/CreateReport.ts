import * as FileSystem from 'react-native-fs';
import ExcelJS from 'exceljs';
import Share from 'react-native-share';
import { Buffer as NodeBuffer } from 'buffer';
import { permissionsRN } from '../../../../libs/permissions';
import { bypassReportModel } from '../../shared/entities/bypassReport/BypassReportModel';
import { imageKitIo } from '../../../../libs/imageKitIo';
import { googleSheet } from '../../../../libs/google/googleSheet/GoogleSheet';
import { userModel } from '../../shared/entities/user/userModel';
import { uploadGoogleSheetUseCase } from './UpdateGoogleSheetUseCase';

const generateShareableExcel = async (): Promise<string> => {
    // await permissionsRN.writeFile();
    const now = new Date();    
    const fileName = "/" + now.getHours() + "_" + now.getMinutes() + '_' + now.getSeconds() + '_report.xlsx';
    const fileUri = FileSystem.ExternalDirectoryPath + fileName;
    return new Promise<string>((resolve, reject) => {
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Me';
        workbook.created = now;
        workbook.modified = now;
        // Add a sheet to work on
        const worksheet = workbook.addWorksheet('Report', {});
        // Just some columns as used on ExcelJS Readme
        worksheet.columns = [
            { header: 'Description', key: 'description', width: 40 },
            { header: 'Comment', key: 'comment', width: 30 },
            { header: 'Rate', key: 'rate', width: 10, },
            { header: 'Is done', key: 'isDone', width: 10, },
            { header: 'Photos', key: 'photos', width: 28 }
        ];
        // Add some test data
        const reportItems = bypassReportModel.bypassReport?.items;        
        reportItems?.forEach((item, index) => {
            const { title, comment, rate, isDone, photos } = item;
            worksheet.addRow({ description: title, comment, rate, isDone: isDone });
            if (photos.length) {
                const row = worksheet.getRow(index + 2);
                row.height = 120
                photos.forEach((photo, index2) => {
                    const imageID = workbook.addImage({
                        extension: 'jpeg',
                        base64: 'data:image/jpeg;base64,' + photo?.data,
                    });
                    worksheet.addImage(imageID, {
                        tl: { col: 4 + index2, row: index + 1 },
                        ext: { width: 150, height: 150 } // currently I'm using fixed width and height.
                    });
                })
            }
            if (isDone) {
                const row = worksheet.getRow(index + 2);
                row.getCell('isDone').fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: '32CD32' },
                    bgColor: { argb: '32CD32' }
                };
            }
        })

        // Style second column
        // worksheet.eachRow((row, rowNumber) => {
        //     row.getCell(2).font = {
        //         name: 'Arial Black',
        //         color: { argb: 'FF00FF00' },
        //         family: 2,
        //         size: 14,
        //         bold: true
        //     };
        // });

        // Write to file
        workbook.xlsx.writeBuffer().then((buffer: ExcelJS.Buffer) => {
            // Do this to use base64 encoding
            const nodeBuffer = NodeBuffer.from(buffer);
            const bufferStr = nodeBuffer.toString('base64');
            FileSystem.writeFile(fileUri, bufferStr, { encoding: 'base64' })
                .then(() => { resolve(fileUri); })
                .catch(error => console.error(error));
        });
    });
}

const shareExcel = async () => {
    const shareableExcelUri: string = await generateShareableExcel();
    await Share.open({
        url: "file://" + shareableExcelUri,
        message: "My report " + Date.now().toLocaleString(),
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Android
        // dialogTitle: 'Your dialog title here', // Android and Web
        // UTI: 'com.microsoft.excel.xlsx' // iOS
    }).then(() => {
        console.log('Return from sharing dialog');
    }).catch(error => {
        console.error('Error', error);
    });
}

export const createLocalReport = async () => {
    await shareExcel();
}