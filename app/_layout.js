import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });
// show themain screen anly if the fonts is loaded
const onLayoutRootView= useCallback(async () => {
if(fontsLoaded) {
  await SplashScreen.hideAsync();
}
},[fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack onLayout={onLayoutRootView}></Stack>
  )
}

export default Layout