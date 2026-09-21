const http = require("node:http");

const port = Number(process.env.PORT) || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/health" || req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        ok: true,
        service: "bigkain-ibm-backend",
        target: "ibm-code-engine",
      })
    );
    return;
  }
  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ ok: false }));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`bigkain-ibm-backend listening on ${port}`);
});
