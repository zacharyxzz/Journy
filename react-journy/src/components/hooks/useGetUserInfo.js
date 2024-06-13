export const useGetUserInfo = () => {
    const { email } = JSON.parse(
        localStorage.getItem("auth")
    );
    return { email };
};