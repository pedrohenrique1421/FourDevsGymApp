import Global_Colors from "../GLobal/Global_Colors";
import Global_Vars from "../GLobal/Global_Var";

export default function Dark_Mode() {
    if (Global_Vars.MODE == 1) {
        // LIGHT
        Global_Colors.BW_PRIMARY_COLOR = "#f1f1f1";
        Global_Colors.BW_SECONDARY_COLOR = "#242424";
        Global_Vars.MODE = 0;
        console.log("light")
    } else {
        // DARK
        Global_Colors.BW_PRIMARY_COLOR = "#242424";
        Global_Colors.BW_SECONDARY_COLOR = "#f1f1f1";
        Global_Vars.MODE = 1;
        console.log("dark")
    }
}
