const apiRequest = async (url = '', optionObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionObj);
        if (!response.ok) throw Error('Please reload app')
    } catch (e) {
        errMsg = e.message
    } finally {
        return errMsg
    }
}
export default apiRequest