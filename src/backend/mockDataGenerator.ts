import { MethodName, MethodResponseData } from "./types"
import { ServerRequestMethods } from "./methods";
const lorems = [
    `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.`,
    `Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.`
];
const sites = [
    "yura",
    "text",
    "test",
    "host"
];
//TODO: find replacement for this

type MockGeneratorsType = {
    [method in MethodName]: ServerRequestMethods[method] extends {
        responseData: infer U;
    } ? (methodParams: ServerRequestMethods[method]["postParams"], signal?: AbortSignal) => Promise<MethodResponseData<method>> : undefined
}

const mock_api_speed = (process.env.REACT_APP_MOCK_API_SPEED || "").toLowerCase();

const asyncTimeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const randomSelect = <K>(input: K[]): K => input[randomInt(0, input.length)];

const mockGenerators: MockGeneratorsType = {
    async "app.init"() { return { user_type: randomSelect(["user", "host_member", "host_owner"]) } },
    async "app.GetRatingList"(_, signal) {
        return new Array(100).fill(null).map((_, id) => ({
            host_id: id,
            host_name: `${randomSelect(sites)} ${randomInt(0, 2) ? randomSelect(sites) : ""}`,
            host_site: randomSelect(sites) + "-" + randomSelect(sites) + ".com",
            host_rating: (100 - id) / 10
        }));
    },
    async "host.GetInfo"({ host_id }, signal) {
        let ratings: ServerRequestMethods["host.GetInfo"]["responseData"]["ratings"] = {
            billing: 0,
            cpu: 0,
            network: 0,
            ram: 0,
            support: 0
        };
        for (let rating of Object.keys(ratings)) {
            //@ts-ignore
            ratings[rating] = Math.round(randomInt(1, 100) / 10);
        }
        return {
            host_description: randomSelect(lorems),
            ratings
        };
    },
    async "host.GetComments"({ host_id }, signal) {
        return new Array(100).fill(null).map((_, i: number) => ({
            id: i,
            time: 0,
            user_id: 0,
            reputation: 500 - i,
            text: randomSelect(lorems).split(" ").slice(0, 3).join(" "),
            answers: [],
            rating: randomInt(0, 10)
        }));
    },//TODO: А ПРИСВАИВАТЬ МНЕ ИХ ЗАЧЕМ???
    "host.AddOrEditRating": undefined,
    "host.AddAnswer": undefined,
    "host.EditAnswer": undefined,
    "host.SendUserReaction": undefined,
    "host.DeleteContent": undefined,
    "hostMembers.Add": undefined,
    "hostMembers.Delete": undefined,
};

let mockRequest = async <M extends MethodName = MethodName>(methodName: M, params: ServerRequestMethods[M]["postParams"], signal?: AbortSignal | null): Promise<MethodResponseData<M>> => {
    console.log("Requesting Method...", methodName);
    await asyncTimeout(mock_api_speed === "high" ? 800 : mock_api_speed === "low" ? 4000 : 0);
    // @ts-ignore //TODO: TypeScript просто сумашедший
    return (await mockGenerators[methodName](params, signal));
};

export default mockRequest;