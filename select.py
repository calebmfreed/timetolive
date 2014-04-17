import csv

data = open('CountrysLifeExpectancy.CSV', "rb")
reader = csv.reader(data)

rownum = 0
for row in reader:
    if rownum != 0:
        colnum = 0
        for col in row:
            if colnum == 0:
                print "%s%s%s" % ('<option>',col,'</option>')
            colnum+=1
    rownum+=1

data.close()

