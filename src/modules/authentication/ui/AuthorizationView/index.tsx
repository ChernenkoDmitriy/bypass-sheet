import React, { FC, useMemo } from "react";
import { useUiContext } from "../../../../UIProvider";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { getStyle } from "./style";

export const AuthorizationView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    // const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <ScreenContainer >
        </ScreenContainer>
    );
};