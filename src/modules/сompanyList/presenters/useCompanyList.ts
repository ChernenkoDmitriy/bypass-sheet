import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const useCompanyList = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();


    const onConnectToCompany = () => navigation.navigate('ConnectToCompanyView');
    const onCreateCompany = () => navigation.navigate('CreateCompanyView');
    return { onConnectToCompany, onCreateCompany }
};