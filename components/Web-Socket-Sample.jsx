import { useState, useEffect, useRef } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

/*
This component connects to an external web socket and renders the response data.
It can be used in Docusaurus markdown by adding the following lines anywhere within the file.

import Socket from "./../../components/Web-Socket-Sample"
<Socket network="polkadot" path="query.staking.validatorCount" defaultValue="150"/>
*/

const Polkadot = "polkadot";
const Kusama = "kusama";

function RPC({ network, path, defaultValue, filters=undefined }) {
	const [returnValue, setReturnValue] = useState('');

	useEffect(() => {
		// Set default as a fallback if anything fails
		setReturnValue(defaultValue);

		// Set socket connection
		let wsUrl = undefined;
		switch (network) {
			case Polkadot:
				wsUrl = "wss://rpc.polkadot.io";
				break;
			case Kusama:
				wsUrl = "wss://kusama-rpc.polkadot.io/";
				break;
			default:
				console.log(`Unknown network provided, ${net}`);
		}

		// Apply default value if network is not recognized
		if (wsUrl === undefined) {
			console.log("Failed to connect to a valid websocket, applying default");
		} else {
			// Otherwise attempt to connect
			const connect = async () => {
				await syncData(network, path, filters, setReturnValue);
			}
			try {
				connect();
			} catch (error) {
				console.log(error);
			}
		}

		// Apply filter if provided
		if(filters !== undefined) {

		}

	}, []);

	return (returnValue)
}

async function syncData(network, path, filters, setReturnValue) {
	let wsUrl = undefined;
	let chainValue = undefined;

	switch (network) {
		case "polkadot":
			wsUrl = "wss://rpc.polkadot.io";
			break;
		case "kusama":
			wsUrl = "wss://kusama-rpc.polkadot.io/";
			break;
		default:
			console.log("Unknown socket url provided, no connection made.");
	}

	// If no valid socket url is provided
	if (wsUrl === undefined) {
		return;
	} else {
		// Connect
		const wsProvider = new WsProvider(wsUrl);
		let api = await ApiPromise.create({ provider: wsProvider });

		// Build API call
		const pathParameters = path.split(".");
		pathParameters.forEach(param => {
			api = api[param];
		});

		// Process constants and queries based on parameters prefix
		switch (pathParameters[0]) {
			case "consts":
				chainValue = api.toString();
				break;
			case "query":
				chainValue = await api();
				chainValue = chainValue.toString();
				break;
			default:
				console.log(`Unknown path prefix (${pathParameters[0]}) in ${path}`);
		}

		// If no value was retrieved use default
		if (chainValue === undefined) {
			return;
		}

		setReturnValue(chainValue);
	}
}

function applyFilter(value, filter, network, setReturnValue) {
  //console.log(`Applying ${filter} to ${network} value ${value}`);
  const values = {
    polkadot: {
      precision: 1e10,
      symbol: "DOT",
    },
    kusama: {
      precision: 1e12,
      symbol: "KSM",
    },
  };

  switch (filter) {
    case "humanReadableToken":
      let decimals = undefined;
      if (network === Polkadot) {
        decimals = 3;
      } else if (network === Kusama) {
				decimals = 6;
			} else {
				console.log("Unknown network type found when attempting to apply 'Human Readable' filter");
				return;
			}
      value = (value / values[network].precision).toFixed(decimals) + " " + values[network].symbol;
      break;
    case "blocksToDays":
      value = (value * 6) / 86400;
      break;
    default:
			console.log("Ignoring unknown filter type");
      return;
  }

  setReturnValue(value);
}

export default RPC;