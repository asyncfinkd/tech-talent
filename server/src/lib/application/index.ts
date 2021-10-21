export function Start(port: number, app: any) {
    const PORT = process.env.PORT || port;

    app.listen(PORT, () => {
        console.log(`server listen ${PORT} port`);
    });
}