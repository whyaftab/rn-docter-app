import { Dimensions, PixelRatio } from "react-native";

export const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  const adjustedWidth = Dimensions.get("screen").height * pixelDensity;
  const adjustedHeight = Dimensions.get("screen").width * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
};

export const cardStyle = {
  borderWidth: 1,
  borderColor: "#e1eBee",
  elevation: 1,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.5,
  shadowRadius: 1,
  padding: 10,
  justifyContent: "space-between",
  backgroundColor: "#fff",
  paddingBottom: 0,
  width: isTablet() ? "48%" : "100%",
  borderRadius: 4,
  overFlow: "hidden"
};
