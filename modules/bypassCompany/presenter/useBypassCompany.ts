import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react"
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";
import { IBypassCompany } from "../../shared/entities/bypassList/IBypassCompany";

export const useBypassCompany = () => {
    const company: IBypassCompany | undefined = useRoute<any>().params?.company;
    const [companyName, setCompanyName] = useState(company?.title || '');
    const navigation = useNavigation();

    const onCreateCompany = () => {
        const company = {
            title: companyName,
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
            bypassListModel.updateCompany({ ...company, title: companyName });
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

    return { company, companyName, setCompanyName, onSave };
}