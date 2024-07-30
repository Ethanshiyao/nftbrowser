const origin = "https://deep-index.moralis.io";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRkODg0NzA1LTYzNzMtNGEyNC1hOGUyLTdlOTM1MmYyMDEwMSIsIm9yZ0lkIjoiNDAxNzkwIiwidXNlcklkIjoiNDEyODY0IiwidHlwZUlkIjoiOTcwYmVhM2QtNzI5My00N2NlLWE4OTgtODUwMmRkZjgwYjI2IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjIyMDc4NjYsImV4cCI6NDg3Nzk2Nzg2Nn0.RDJ9PrG8ruH9-S11AlmscZK2Y0zcjnX68L7XXpcDamo";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const reponse = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-Key": apikey,
    },
  });

  return reponse.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const reponse = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-Key": apikey,
    },
  });

  return reponse.json();
};

export const getNFTTransfers = async (tokenAddress, tokenID) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenID}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const reponse = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-Key": apikey,
    },
  });

  return reponse.json();
};
