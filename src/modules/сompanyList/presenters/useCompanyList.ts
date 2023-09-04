import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect } from "react";
import { useCompanyListUseCase } from "../useCase/useCompanyListUseCase";
import { userModel } from "../../shared/entities/user/userModel";
import { useDeleteCompanyUseCase } from "../useCase/useDeleteCompanyUseCase";
import { PERMISSIONS, PermissionStatus, request } from "react-native-permissions";
import { isIOS } from "../../../utils/Utils";
import { Alert, Linking } from "react-native";
import { useUiContext } from "../../../UIProvider";


export const useCompanyList = () => {

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

    const deleteCompany = async (id: number) => {
        Alert.alert(
            t('attention'),
            t('geolocationMustBeEnabled'),
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

    const getCompanyList = async () => {
        const { message } = await useCompanyListUseCase(Number(userModel.user?.id));
    };

    const onEditCompany = (id: number, companyName: string) => {
        navigation.navigate('EditCompanyView', { id: id, companyName: companyName });
    };

    const onConnectToCompany = () => navigation.navigate('ConnectToCompanyView');
    const onCreateCompany = () => navigation.navigate('CreateCompanyView');
    return { onConnectToCompany, onCreateCompany, deleteCompany, onEditCompany }
};