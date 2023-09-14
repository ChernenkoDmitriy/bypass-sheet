import React, { useMemo, useCallback, createRef, useEffect } from "react";
import moment from "moment";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
// components
import Month from "./Month";
// data
import { getMonths } from "./utils/data";
// types
import { Month_Type } from "./utils/data";
import { LOCALE_TYPE } from "./utils/locale";
import { Style } from "./index";
import { useUiContext } from "../../../src/UIProvider";
import { scaleHorizontal, scaleVertical } from "../../../src/utils/Utils";


interface Props {
  pastYearRange: number;
  futureYearRange: number;
  initialNumToRender: number;
  locale: LOCALE_TYPE;
  handlePress: (date: string) => void;
  startDate: string | null;
  endDate: string | null;
  style?: Style;
  flatListProps?: any;
  isMonthFirst?: boolean;
  disabledBeforeToday?: boolean;
};

const LAYOUT_HEIGHT = 300;
const CalendarList = ({
  pastYearRange,
  futureYearRange,
  initialNumToRender,
  locale,
  handlePress,
  startDate,
  endDate,
  flatListProps,
  isMonthFirst,
  disabledBeforeToday,
  style,
}: Props) => {

  const { colors, t } = useUiContext();

  const months: Month_Type[] = useMemo(
    () => getMonths(pastYearRange, futureYearRange),
    [pastYearRange, futureYearRange]
  );

  const getInitialIndex = useCallback(() => {
    return months.findIndex((month: Month_Type) => {
      const targetDate = startDate ? moment(startDate) : moment();
      return month.id === targetDate.format("YYYY-MM");
    });
  }, []);

  const handleRenderItem = useCallback(
    ({ item }: { item: any }) => (
      <View
        style={{
          backgroundColor: colors.background,
          height:  300
        }}
      >
        <Month
          item={item}
          locale={locale}
          handlePress={handlePress}
          startDate={startDate}
          endDate={endDate}
          isMonthFirst={isMonthFirst}
          disabledBeforeToday={disabledBeforeToday}
          style={style}
        />
      </View>
    ),
    [locale.today, startDate, endDate]
  );

  const renderDayNames = () => {
    const result = [];
    const dayNames = locale.dayNames;

    for (let i = 0; i < dayNames.length; i++) {
      result.push(
        <View key={i} style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Text style={[{
            fontSize: 15,
            color: colors.text,
          }, style?.dayNameText]}>
            {t(dayNames[i])}
          </Text>
        </View>
      );
    }
    return result;
  };

  return (
    <View style={[{ position: 'relative' }, style?.container]}>
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingHorizontal: scaleHorizontal(20),
        paddingTop: scaleVertical(20)
      }}>
        <View style={{
          height: scaleVertical(40),
          flexDirection: "row",
          alignItems: "center",
        }}>{renderDayNames()}</View>
      </View>
      <View
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </View>
      <FlatList
        keyExtractor={(item: Month_Type) => item.id}
        data={months}
        renderItem={handleRenderItem}
        getItemLayout={(_, index) => ({
          length: LAYOUT_HEIGHT,
          offset: LAYOUT_HEIGHT * index,
          index,
        })}
        initialScrollIndex={getInitialIndex()}
        initialNumToRender={initialNumToRender}
        {...flatListProps}
        contentContainerStyle={{ paddingBottom: scaleVertical(230) }}
      />
    </View>
  );
};

export default CalendarList;