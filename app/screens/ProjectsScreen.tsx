import React, { FC } from "react"
import { Linking, Platform, TextStyle, View, ViewStyle } from "react-native"
import { Button, ListItem, Screen, Text } from "../components"
import { colors, spacing } from "../theme"
import { MainTabScreenProps } from "../navigators/MainTabNavigator"
import LiquidSwipe from "../components/LiquidSwipe"

export const ProjectsScreen: FC<MainTabScreenProps<"Projects">> = function ProjectsScreen(_props) {
  const slides = [
    {
      color: "#040535",
      title: "Ector",
      description: "explore recipes by food type, preparation method, cuisine, country and more",
      picture: require("../components/LiquidSwipe/assets/ector.webp"),
    },
    {
      color: "#005771",
      title: "Compani",
      description:
        "Hot or cold, our dessert recipes can turn an average meal into a memorable event",
      picture: require("../components/LiquidSwipe/assets/compani.webp"),
    },
    {
      color: "#97CFD3",
      title: "Compani Outils",
      description:
        "Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs",
      picture: require("../components/LiquidSwipe/assets/compani_outils.webp"),
    },
    {
      color: "#E8D9C4",
      title: "Mister Good Coffee",
      description:
        "Browse thousands of curated recipes from top chefs, each with detailled cooking instructions",
      picture: require("../components/LiquidSwipe/assets/mister_good_coffee.webp"),
    },
    {
      color: "#F49930",
      title: "Rosario",
      description: "Browse our best themed recipes, cooking tips, and how-to food video & photos",
      picture: require("../components/LiquidSwipe/assets/rosario.webp"),
    },
  ]

  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <LiquidSwipe slides={slides} />
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
