export const HeaderHelper = ( credential = {
    token:localStorage.getItem("token"),
    userSeq:localStorage.getItem("user-seq"),
}) => {
    var { token, userSeq } = credential;
    // userKey=sessionStorage.getItem(LOCAL_STORAGE_USER_KEY)??userKey;
    // token=sessionStorage.getItem(LOCAL_STORAGE_USER_TOKEN)??token;
    // mngKey= sessionStorage.getItem(LOCAL_STORAGE_MNG_KEY)??mngKey;
    // accountSeq=sessionStorage.getItem(LOCAL_STORAGE_ACC_SEQ) ?? accountSeq;
    // userGroup= sessionStorage.getItem(LOCAL_STORAGE_USER_GROUP) ??userGroup;
    var header = {};
    header['Authorization'] =`Bearer ${token}`;
    header['user-seq'] = userSeq;
    return header;
}