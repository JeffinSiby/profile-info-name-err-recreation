import { CredentialManagerFactory, Logger, ProfileInfo } from '@zowe/imperative';
import { KeytarApi } from "@zowe/zowe-explorer-api";

export async function activate() {
	const log = Logger.getAppLogger();
	const keytarApi = new KeytarApi(log);
	await keytarApi.activateKeytar(CredentialManagerFactory.initialized,false);
	try {
		const test = new ProfileInfo("zowe");
	} catch (e) {
		console.log(e);
	}
}