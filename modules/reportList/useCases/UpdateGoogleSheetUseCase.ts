import { bypassReportModel } from '../../shared/entities/bypassReport/BypassReportModel';
import { imageKitIo } from '../../../libs/imageKitIo';
import { googleSheet } from '../../../libs/google/googleSheet/GoogleSheet';
import { userModel } from '../../shared/entities/user/userModel';

const generateReportSheet = async (range: string) => {
    const reportItems = bypassReportModel.bypassReport?.items;
    const body: any = {
        range: `${userModel.googleSheet.sheetName}!${range}`,
        majorDimension: "ROWS",
        values: [],
    }

    if (reportItems) {
        for (let index = 0; index < reportItems.length; index++) {
            const row = [];
            const item = reportItems[index];
            row.push(index ? '' : bypassReportModel.bypassReport?.title);
            row.push(item?.title || '');
            row.push(item?.comment || '');
            row.push(item?.rate || '');

            if (item?.photos) {
                for (let j = 0; j < item.photos.length; j++) {
                    const image = item.photos[j];
                    if (image) {
                        const link = await imageKitIo.upload(image);
                        row.push(`=IMAGE("${link?.url}")`);
                    }
                }
            }
            body.values.push(row);
        }
    }

    return body;
}

const updateRowSize = async (start: number, end: number) => {
    const spreadSheet = await googleSheet.readSheet(userModel.googleSheet.sheetId);
    const sheetId = spreadSheet.sheets.length - 1;
    const body = {
        requests: [
            {
                updateDimensionProperties: {
                    range: {
                        sheetId: sheetId,
                        dimension: 'ROWS',
                        startIndex: start,
                        endIndex: end,
                    },
                    properties: { pixelSize: 90, },
                    fields: 'pixelSize',
                },
            },
        ],
    };
    await googleSheet.editRow(userModel.googleSheet.sheetId, body);
};

export const uploadGoogleSheetUseCase = async () => {
    try {
        let result = null;
        const sheet = await googleSheet.read(userModel.googleSheet.sheetId, userModel.googleSheet.sheetName);
        if (sheet?.values) {
            const range = `A${sheet?.values.length + 1}`;
            const body = await generateReportSheet(range);
            await updateRowSize(sheet?.values.length, sheet?.values.length + (bypassReportModel.bypassReport?.items.length || 0));
            result = await googleSheet.update(userModel.googleSheet.sheetId, userModel.googleSheet.sheetName, body, range);
        }
        return result;
    } catch (error) {
        return null
    }
}
