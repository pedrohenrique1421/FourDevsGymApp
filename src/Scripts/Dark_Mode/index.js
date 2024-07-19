import Global_Vars from "../GLobal/Global_Var";

export default function Dark_Mode_Set() {
    if (Global_Vars.MODE == 1) {
        Global_Vars.PRIMARY_COLOR = "#FF6B14";
        Global_Vars.SECONDARY_COLOR = "#C54900";
        Global_Vars.BW_PRIMARY_COLOR = "#efefef";
        Global_Vars.BW_SECONDARY_COLOR = "#f1f1f1";
        Global_Vars.BW_TERTIARY_COLOR = "#DD5E13";
    } else {
        Global_Vars.PRIMARY_COLOR = "#FF6B14";
        Global_Vars.SECONDARY_COLOR = "#C54900";
        Global_Vars.BW_PRIMARY_COLOR = "#101010";
        Global_Vars.BW_SECONDARY_COLOR = "#0e0e0e";
        Global_Vars.BW_TERTIARY_COLOR = "#DD5E13";
    }
}
