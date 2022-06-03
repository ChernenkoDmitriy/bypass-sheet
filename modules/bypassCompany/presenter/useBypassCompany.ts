import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { bypassListModel } from "../../shared/entities/bypassList/BypassListModel";

export const useBypassCompany = () => {
    const [companyName, setCompanyName] = useState('');
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

    return { companyName, setCompanyName, onCreateCompany };
}