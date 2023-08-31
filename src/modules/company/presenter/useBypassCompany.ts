import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { IBypassCompany } from "../../shared/entities/bypassList/IBypassCompany";
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";

export const useBypassCompany = () => {
    const company: IBypassCompany | null = bypassListModel.chosenCompany;
    const [companyName, setCompanyName] = useState(company?.title || '');
    const [companyAddress, setCompanyAddress] = useState(company?.address || '');
    const navigation = useNavigation();

    useEffect(() => {
        return () => { bypassListModel.chosenCompany = null }
    }, [])

    const onCreateCompany = () => {
        const company = {
            title: companyName,
            address: companyAddress,
            id: Date.now(),
            items: [],
            reportName: null,
            lastUpdate: null,
        };
        bypassListModel.addCompany(company);
        navigation.goBack();
    }

    const onUpdateCompany = () => {
        if (company) {
            bypassListModel.updateCompany({ ...company, title: companyName, address: companyAddress });
        }
        navigation.goBack();
    }

    const onSave = () => {
        if (company) {
            onUpdateCompany();
        } else {
            onCreateCompany();
        }
    }

    return { company, companyName, companyAddress, setCompanyAddress, setCompanyName, onSave };
}