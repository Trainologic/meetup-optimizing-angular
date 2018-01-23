main();
async function main() {
    console.log("before");
    await delay(1500);
    console.log("after");
}
async function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=main.js.map