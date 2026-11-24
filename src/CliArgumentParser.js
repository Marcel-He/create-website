import { chalkStderr } from "chalk";
import { parseArgs } from "node:util";

export class CliArgumentParser {
    /**
     * @typedef {object} ParsedArguments
     * @property {string|undefined} logLevel
     */

    /**
     * @returns {ParsedArguments}
     */
    parseArgs() {
        let parsedArgs;

        try {
            parsedArgs = parseArgs({
                options: {
                    loglevel: {
                        type: "string",
                        default: "silent",
                    },
                },
            });
        } catch (err) {
            if (typeof err.code === "string" && err.code.startsWith("ERR_PARSE_ARGS_")) {
                console.error(chalkStderr.red(err.message));
                process.exit(1);
            }
            throw err;
        }

        return {
            logLevel: parsedArgs.values.loglevel,
        };
    }
}
