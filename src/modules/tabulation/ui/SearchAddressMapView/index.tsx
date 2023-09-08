import React, { FC, useMemo, useState } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";
import { DashboardHeader } from "../../../dashboard/ui/components/dashboardHeader";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";
import { MainButton } from "../../../../UIKit/mainButton";
import { workPlaceModel } from "../../../shared/entities/workPlace/WorkPlaceModel";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export const SearchAddressMapView: FC = observer(() => {
    const [selectedCoordinate, setSelectedCoordinate] = useState(null);
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleMapPress = (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setSelectedCoordinate({ latitude, longitude });
        workPlaceModel.latitude = latitude;
        workPlaceModel.longitude = longitude;
    };

    const selectedAddress = () => {
        if (workPlaceModel.latitude && workPlaceModel.longitude) {
            navigation.goBack();
        };
    };

    return (
        <ScreenContainer edges={['bottom']} containerStyle={styles.container} headerComponent={<DashboardHeader title={t('newCompany')} logo={false} isBackAvailable />}>
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{ latitude: 50.450001, longitude: 30.523333, latitudeDelta: 2, longitudeDelta: 2 }}
                    onPress={handleMapPress}
                >
                    {selectedCoordinate && (
                        <Marker
                            coordinate={selectedCoordinate}
                            title={t('selectedAddress')}
                        />
                    )}
                </MapView>
                <View style={styles.buttonWrapper}>
                    <MainButton title="select address" onPress={selectedAddress} />
                </View>
            </View>
        </ScreenContainer>
    );
});