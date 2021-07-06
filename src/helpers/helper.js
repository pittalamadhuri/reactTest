export const removeOccurances = (list) => {
    var eregex = new RegExp('e', "ig");
    return list.map(element => {
        return {
            ...element,
            title: element.title.replaceAll(eregex, '')}
        })
}