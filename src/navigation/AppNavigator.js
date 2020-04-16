import React from "react";
import { View, ScrollView, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createDrawerNavigator,
  DrawerNavigatorItems
} from "react-navigation-drawer";
import { Icon, Badge, Text } from "react-native-elements";
import LoginScreen from "../screens/Authentication/LoginScreen";
import { colors, isTablet } from "../constant";
import ForgotPasswordScreen from "../screens/Authentication/ForgotPasswordScreen";
import ChangePassword from "../screens/Authentication/ChangePassword";
import OtpScreen from "../screens/Authentication/OtpScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import AppointmentScreen from "../screens/Appointment/AppointmentScreen";
import { DrawerImage, BellIcon, BarIcon, SearchIcon } from "../componants";
import TransactionScreen from "../screens/Tranactions/TransactionScreen";
import MonthTransactionScreen from "../screens/Tranactions/MonthTransactionScreen";
import YearTransactionScreen from "../screens/Tranactions/YearTransactionScreen";
import ShareScreen from "../screens/Share/ShareScreen";
import PharmaDBScreen from "../screens/PharmaDB/PharmaDBScreen";
import DiagnosticdbScreen from "../screens/DiagnosticDB/DisagnosticdbScreen";
import PointRedemptionScreen from "../screens/PointRedemption/PointRedemptionScreen";
import CmeCalendarScreen from "../screens/PointRedemption/CmeCalendarScreen";
import CallListScreen from "../screens/Call/CallListScreen";
import PendingRxScreen from "../screens/PendingRx/PendingRxScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import AvailabilityScreen from "../screens/Availability/AvailabilityScreen";
import AddEditAvailabilityScreen from "../screens/Availability/AddEditAvailabilityScreen";
import WriteRxScreen from "../screens/WriteRx/WriteRxScreen";
import CaptureRxScreen from "../screens/WriteRx/CaptureRxScreen";
import SignUpScreen from "../screens/SignUp/SignUpScreen";
import WorkflowScreen from "../screens/Workflow/WorkflowScreen";
import WalkInPatientScreen from "../screens/Walkinpatient/WalkInPatientScreen";
import WalkInRegisterationForm from "../screens/Walkinpatient/WalkInRegisterationForm";
import WriteRxListScreen from "../screens/WriteRx/Tablet/WriteRxListScreen";
import PrescriptionScreen from "../screens/WriteRx/Tablet/PrescriptionScreen";
import RefillScreen from "../screens/Refill/RefillScreen";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import RefillPrescriptionScreen from "../screens/Refill/RefillPrescriptionScreen";

const hiddenDrawerItems = !isTablet()
  ? ["writeRxTab", "workflow", "walkIn", "refill"]
  : ["callList", "writeRx"];

const CustomDrawerContentComponent = props => {
  const clonedProps = {
    ...props,
    items: props.items.filter(item => !hiddenDrawerItems.includes(item.key))
  };
  return (
    <ScrollView>
      <View
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 40,
            paddingBottom: 30,
            alignItems: "center"
          }}
        >
          <Icon name="user-circle-o" size={60} color="#fff" />
          <Text
            style={{
              fontSize: 30,
              color: "#fff",
              paddingLeft: 10,
              fontWeight: "bold"
            }}
          >
            lorem ipsum
          </Text>
        </View>
        <DrawerNavigatorItems
          {...clonedProps}
          labelStyle={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "300"
          }}
          itemStyle={{
            backgroundColor: colors.secondary
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
};

const Auth = createStackNavigator(
  {
    signIn: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    forgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        header: null
      }
    },
    changePassword: {
      screen: ChangePassword,
      navigationOptions: {
        header: null
      }
    },
    otpVerification: {
      screen: OtpScreen,
      navigationOptions: {
        header: null
      }
    },
    signUp: {
      screen: SignUpScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "signIn",
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const HomeStack = createStackNavigator(
  {
    dashboard: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerStyle: {
          backgroundColor: colors.primary,
          fontFamily: "Poppins"
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    headerLayoutPreset: "left",

    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const AppointmentStack = createStackNavigator(
  {
    appointments: {
      screen: AppointmentScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="filter-outline"
              color="#fff"
              type="material-community"
              containerStyle={{ paddingRight: 10 }}
              onPress={() => navigation.navigation.navigate("signIn")}
            />
            <BellIcon navigation={navigation} />
          </View>
        )
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const TransactionStack = createStackNavigator(
  {
    transactions: {
      screen: TransactionScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Transaction History",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    yearlyTransaction: {
      screen: YearTransactionScreen,
      navigationOptions: ({ navigation }) => ({
        title: "2019",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    monthlyTransaction: {
      screen: MonthTransactionScreen,
      navigationOptions: ({ navigation }) => ({
        title: "January",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const ShareStack = createStackNavigator(
  {
    appointments: {
      screen: ShareScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Share",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const PharmadbStack = createStackNavigator(
  {
    pharmadb: {
      screen: PharmaDBScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Pharma DB",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <SearchIcon navigation={navigation} />
            <BellIcon navigation={navigation} />
          </View>
        )
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const DiagnosticdbStack = createStackNavigator(
  {
    pharmadb: {
      screen: DiagnosticdbScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Diagnostic DB",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <SearchIcon navigation={navigation} />
            <BellIcon navigation={navigation} />
          </View>
        )
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const PointRedemptionStack = createStackNavigator(
  {
    pointRedemption: {
      screen: PointRedemptionScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Point Redemption",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    cmeCalendar: {
      screen: CmeCalendarScreen,
      navigationOptions: ({ navigation }) => ({
        title: "CME Calendar",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const CallListStack = createStackNavigator(
  {
    callList: {
      screen: CallListScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Call Time",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const PendingRxStack = createStackNavigator(
  {
    pendingRx: {
      screen: PendingRxScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Pending Rx Approvals",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    EditProfile: {
      screen: EditProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Edit Profile",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const AvailabilityStack = createStackNavigator(
  {
    availabilty: {
      screen: AvailabilityScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Edit Availabilty",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    addAvailability: {
      screen: AddEditAvailabilityScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Edit Availabilty",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    editAvailability: {
      screen: AddEditAvailabilityScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Edit Availabilty",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const WriteRxStack = createStackNavigator(
  {
    writeRx: {
      screen: isTablet() ? WriteRxListScreen : WriteRxScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Write Rx",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    captureRx: {
      screen: CaptureRxScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Capture Rx",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: (
          <Icon
            type="evilicon"
            name="camera"
            size={40}
            containerStyle={{
              paddingRight: 10
            }}
          />
        )
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const WriteRxTabletStack = createStackNavigator(
  {
    prescription: {
      screen: PrescriptionScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Write Rx - Prescription",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);
const WorkflowStack = createStackNavigator(
  {
    workflow: {
      screen: WorkflowScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Today's workflow",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: (
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="filter-outline"
              color="#fff"
              type="material-community"
              containerStyle={{ paddingRight: 10 }}
              onPress={() => navigation.state.params.workflowFilterToggle()}
            />
            <BellIcon navigation={navigation} />
          </View>
        )
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const walkInPatientStack = createStackNavigator(
  {
    walkIn: {
      screen: WalkInPatientScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Walk-In Patient Registeration",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    walkinRegisteration: {
      screen: WalkInRegisterationForm,
      navigationOptions: ({ navigation }) => ({
        title: "Walk-In Patient Registeration Form",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const RefillStack = createStackNavigator(
  {
    refill: {
      screen: RefillScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Refill Prescription",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />,
        headerRight: <BellIcon navigation={navigation} />
      })
    },
    refillPrescription: {
      screen: RefillPrescriptionScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Prescription",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerRight: <BellIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const NotificationStack = createStackNavigator(
  {
    notification: {
      screen: NotificationScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Notificaitons",
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          fontWeight: "100",
          fontFamily: "Poppins"
        },
        headerTintColor: "#fff",
        headerLeft: <BarIcon navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.backgroundColor
    }
  }
);

const App = createDrawerNavigator(
  {
    home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <DrawerImage source={require("../../assets/navigation/home.png")} />
        )
      }
    },
    appointments: {
      screen: AppointmentStack,
      navigationOptions: {
        drawerLabel: "Appointments",
        drawerIcon: () => (
          <DrawerImage
            source={require("../../assets/navigation/calendar.png")}
          />
        )
      }
    },
    transaction: {
      screen: TransactionStack,
      navigationOptions: {
        drawerLabel: "Transactions",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/credit.png")} />
        )
      }
    },
    share: {
      screen: ShareStack,
      navigationOptions: {
        drawerLabel: "Share Refferal Code",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/share.png")} />
        )
      }
    },
    profile: {
      screen: ProfileStack,
      navigationOptions: {
        drawerLabel: "Edit Profile",
        drawerIcon: () => (
          <DrawerImage
            source={require("../../assets/navigation/profile.png")}
          />
        )
      }
    },
    availabilty: {
      screen: AvailabilityStack,
      navigationOptions: {
        drawerLabel: "Edit Availabilty",
        drawerIcon: () => (
          <DrawerImage
            source={require("../../assets/navigation/hospital.png")}
          />
        )
      }
    },
    pharmadb: {
      screen: PharmadbStack,
      navigationOptions: {
        drawerLabel: "Pharma DB",
        drawerIcon: () => (
          <DrawerImage
            source={require("../../assets/navigation/medicine.png")}
          />
        )
      }
    },
    diagnosticdb: {
      screen: DiagnosticdbStack,
      navigationOptions: {
        drawerLabel: "Diagnostic DB",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/report.png")} />
        )
      }
    },
    pointRedemption: {
      screen: PointRedemptionStack,
      navigationOptions: {
        drawerLabel: "Point Redeemption",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/gift.png")} />
        )
      }
    },
    callList: {
      screen: CallListStack,
      navigationOptions: {
        drawerLabel: "Call List",
        drawerIcon: () => <Icon name="phone" size={30} color="#fff" />
      }
    },
    writeRx: {
      screen: WriteRxStack,
      navigationOptions: {
        drawerLabel: "Write Rx",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/rx.png")} />
        )
      }
    },
    writeRxTab: {
      screen: WriteRxTabletStack,
      navigationOptions: {
        drawerLabel: "Write Rx",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/rx.png")} />
        )
      }
    },
    workflow: {
      screen: WorkflowStack,
      navigationOptions: {
        drawerLabel: "Todays workflow",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/bell.png")} />
        )
      }
    },
    walkIn: {
      screen: walkInPatientStack,
      navigationOptions: {
        drawerLabel: "Walk in patient",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/group.png")} />
        )
      }
    },
    refill: {
      screen: RefillStack,
      navigationOptions: {
        drawerLabel: "Refill Prescription",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/refill.png")} />
        )
      }
    },
    pendingRx: {
      screen: PendingRxStack,
      navigationOptions: {
        drawerLabel: "Pending Rx Approvals",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/refill.png")} />
        )
      }
    },
    notification: {
      screen: NotificationStack,
      navigationOptions: {
        drawerLabel: "Notifications",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/bell.png")} />
        )
      }
    },
    logout: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: "Logout",
        drawerIcon: () => (
          <DrawerImage source={require("../../assets/navigation/logout.png")} />
        )
      }
    }
  },
  {
    initialRouteName: "home",
    drawerType: "slide",
    contentComponent: CustomDrawerContentComponent,
    drawerBackgroundColor: colors.secondary,
    drawerWidth: 400
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Auth,
    App
  },
  {
    initialRouteName: "App"
  }
);

export const AppContainer = createAppContainer(SwitchNavigator);
