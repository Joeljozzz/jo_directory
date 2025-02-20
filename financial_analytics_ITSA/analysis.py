import pandas as pd

s = "C:/Users/joelj/OneDrive/Desktop/Work/jo_directory/financial_analytics_ITSA/cndtbl1_ty2021.csv"


data=pd.read_csv(s,delim_whitespace=True)
print(data.head)