import matplotlib.pyplot as plot
import pandas as pd
import seaborn as sb

data = {
    "Charakter": ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"],
    "Methode": ["Per Hand", "Per App"] * 6,
    "Teilnehmer 1": ["43:56", "5:46", "23:09", "7:04", "19:12", "3:38", "44:04", "5:56", "29:36", "5:41", "24:10", "6:12"],
    "Teilnehmer 2": ["68:41", "5:52", "29:26", "5:13", "23:04", "3:59", "51:47", "5:49", "35:23", "5:44", "29:11", "5:42"],
    "Teilnehmer 3": ["21:40", "3:55", "15:12", "3:48", "13:02", "3:27", "25:53", "3:57", "19:21", "3:31", "17:41", "3:13"],
    "Teilnehmer 4": ["18:39", "4:23", "14:19", "3:57", "14:16", "3:41", "24:30", "4:03", "20:11", "3:28", "16:37", "3:15"],
    "Teilnehmer 5": ["10:49", "3:32", "9:53", "3:24", "10:16", "2:40", "15:05", "2:43", "13:19", "2:59", "14:46", "2:54"],
    "Teilnehmer 6": ["12:23", "3:11", "11:54", "3:29", "11:34", "2:39", "14:22", "2:55", "14:01", "3:28", "13:48", "3:07"]
}

dataFrame = pd.DataFrame(data)
def time_to_minutes(time_str):
    minutes, seconds = map(int, time_str.split(':'))
    return minutes + seconds / 60

for col in dataFrame.columns[2:]:
    dataFrame[col] = dataFrame[col].apply(time_to_minutes)

dataFrame_simplified = dataFrame.melt(id_vars=["Charakter", "Methode"], var_name="Teilnehmer", value_name="Zeit in Minuten")

plot.figure(figsize=(14, 8))
sb.barplot(x="Charakter", y="Zeit in Minuten", hue="Methode", data=dataFrame_simplified, errorbar=None)
plot.title("Zeit zur Charaktererstellung per Hand vs. per App")
plot.xlabel("Charakter")
plot.ylabel("Zeit in Minuten")
plot.legend(title="Methode")
plot.show()