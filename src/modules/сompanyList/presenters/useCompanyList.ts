import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import { useCompanyListUseCase } from "../useCase/useCompanyListUseCase";
import { userModel } from "../../shared/entities/user/userModel";
import { useDeleteCompanyUseCase } from "../useCase/useDeleteCompanyUseCase";
import { isIOS } from "../../../utils/Utils";
import { Alert, Linking } from "react-native";
import { useUiContext } from "../../../UIProvider";
import { ICompany } from "../../shared/entities/company/ICompany";
import { companyModel } from "../../shared/entities/company/CompanyModel";
import { useAcceptInviteUseCase } from "../useCase/useAcceptInviteUseCase";
import { useGetMembersUseCase } from "../useCase/useGetMembersUseCase";


export const useCompanyList = () => {
    const [containerListRefresh, setContainerListRefresh] = useState(false);

    const navigation = useNavigation<StackNavigationProp<any>>();
    const { t } = useUiContext();

    useFocusEffect(
        useCallback(() => {
            getCompanyList();
        }, [])
    );

    // useEffect(() => {
    //     requestPermission();
    // }, []);

    // const requestPermission = async () => {
    //     const permissionStatus = await request(isIOS ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    //     console.log('request', permissionStatus);
    //     userModel.location = { ...userModel.location, permissionStatus };
    //     await onGetLocation(permissionStatus);
    // };

    // const onGetLocation = async (permissionStatus: PermissionStatus) => {
    //     if (permissionStatus === 'granted') {
    //         await getLocation();
    //     } else {
    //         const isBlocked = permissionStatus === 'blocked';
    //         Alert.alert(
    //             t('attention'),
    //             t('geolocationMustBeEnabled'),
    //             [{
    //                 text: isBlocked ? t('settings') : t('requestPermission'),
    //                 onPress: isBlocked ? Linking.openSettings : requestPermission,
    //             }]
    //         );
    //     };
    // };

    const onRefresh = () => {
        setContainerListRefresh(true);
        getCompanyList();
        setContainerListRefresh(false);
    };

    const onPressEvent = (company: ICompany) => {
        companyModel.chosenCompany = company;
        navigation.navigate('TabNavigator');
    };

    const deleteCompany = async (id: number) => {
        Alert.alert(
            t('attention'),
            t('doDelete'),
            [{
                text: t('cancel'),
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: t('continue'),
                onPress: async () => {
                    await useDeleteCompanyUseCase(id),
                        await useCompanyListUseCase(Number(userModel.user?.id));
                },
            },]
        );
    };
    const acceptInvite = async (company_id: number, isAccept: boolean) => {
        await useAcceptInviteUseCase(company_id, isAccept);
        getCompanyList();
    }

    const getCompanyList = async () => {
        const { message } = await useCompanyListUseCase();
    };

    const onEditCompany = (id: number, companyName: string) => {
        navigation.navigate('EditCompanyView', { id: id, companyName: companyName });
    };

    const onConnectToCompany = () => navigation.navigate('ConnectToCompanyView');
    const onCreateCompany = () => navigation.navigate('CreateCompanyView');

    return { containerListRefresh, onRefresh, onConnectToCompany, onCreateCompany, deleteCompany, onEditCompany, acceptInvite, onPressEvent, getCompanyList };
};