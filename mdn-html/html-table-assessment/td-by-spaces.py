def parseSpacedStringToTDElements(data):
    terms = data.split()
    output = ""
    for term in terms:
        output += "<td>" + term + "</td>"
    return output