import buildServer from "./server";

const server = buildServer();

async function main() {
  try {
    await (await server).listen({ port: 3000 });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
