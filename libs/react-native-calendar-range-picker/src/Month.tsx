import React, { createRef, memo, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
// components
import Week from "./Week";
// types
import { getWeeks, Month_Type, Week_Type } from "./utils/data";
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";

import { useUiContext } from "../../../src/UIProvider";
import { scaleHorizontal, scaleVertical } from "../../../src/utils/Utils";

interface Props {
  item: Month_Type;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
  style?: Style;
}

const PADDING_HORIZONTAL = scaleHorizontal(20);
function Month({
  item,
  locale,
  handlePress,
  startDate,
  endDate,
  isMonthFirst,
  disabledBeforeToday,
  style,
}: Props) {
  const { year, month } = item;

  const { t } = useUiContext();

  const renderWeeks = () => {
    const result = [];
    const weeks: Week_Type[] = getWeeks(item.id, startDate, endDate);
    const is6Weeks = weeks.length > 5;

    for (let i = 0; i < weeks.length; i++) {
      result.push(
        <Week
          key={i}
          week={weeks[i]}
          locale={locale}
          handlePress={handlePress}
          is6Weeks={is6Weeks}
          disabledBeforeToday={disabledBeforeToday}
          style={style}
        />
      );
    }
    return result;
  };

  return (
    <View style={[styles.monthContainer, style?.monthContainer]}>
      <View style={styles.monthNameContainer}>
        <Text style={[styles.monthName, style?.monthNameText]}>
          {isMonthFirst ? <Text>{t(locale.monthNames[month - 1])} </Text> : null}
          {year}
          {locale.year}
          {!isMonthFirst ? <Text> {t(locale.monthNames[month - 1])}</Text> : null}
        </Text>
      </View>
      {renderWeeks()}
    </View>
  );
}

function areEqual(prevProps: Props, nextProps: Props) {
  const newId = nextProps.item.id;
  if (
    nextProps.startDate &&
    moment(nextProps.startDate).format("YYYY-MM") === newId
  ) {
    return false;
  }

  if (
    nextProps.endDate &&
    moment(nextProps.endDate).format("YYYY-MM") === newId
  ) {
    return false;
  }

  if (
    prevProps.startDate &&
    moment(prevProps.startDate).format("YYYY-MM") === newId
  ) {
    return false;
  }

  if (
    prevProps.endDate &&
    moment(prevProps.endDate).format("YYYY-MM") === newId
  ) {
    return false;
  }

  if (
    nextProps.startDate &&
    nextProps.endDate &&
    moment(nextProps.startDate).format("YYYYMM") <
    moment(newId).format("YYYYMM") &&
    moment(nextProps.endDate).format("YYYYMM") > moment(newId).format("YYYYMM")
  ) {
    return false;
  }

  if (
    prevProps.endDate &&
    prevProps.startDate &&
    moment(prevProps.startDate).format("YYYYMM") <
    moment(newId).format("YYYYMM") &&
    moment(prevProps.endDate).format("YYYYMM") > moment(newId).format("YYYYMM")
  ) {
    return false;
  }

  if (
    prevProps.locale &&
    nextProps.locale &&
    prevProps.locale.today !== nextProps.locale.today
  ) {
    return false;
  }

  return true;
}

export default memo(Month, areEqual);

const styles = StyleSheet.create({
  monthContainer: {
    marginVertical: scaleVertical(10),
    paddingHorizontal: PADDING_HORIZONTAL,
    // paddingBottom: 0,
    // marginBottom: 0,
    // flexGrow: 1
  },
  monthNameContainer: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    // height: 30,
    marginBottom: scaleVertical(10)
  },
  monthName: {
    fontSize: 16,
  },
  dayContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});