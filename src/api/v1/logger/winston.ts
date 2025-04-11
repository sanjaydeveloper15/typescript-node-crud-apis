import winston, { Logger } from "winston";

enum LogTypeEnum {
    Info = "info",
    Warn = "warn",
    Error = "error"
}

class WinstonLogger {

    private generateLogger(logType: LogTypeEnum): Logger {
        if (Object.values(LogTypeEnum).includes(logType)) {
            return winston.createLogger({
                level: logType, // set base level
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.json()
                ),
                transports: [
                    new winston.transports.File({ filename: `${logType}.log`, level: logType })
                ],
            })
        } else {
            throw new Error(`Invalid log type: ${logType}`);
        }
    }

    info(serviceName: string, message: string, otherObj: any = {}): void {
        const Logger = this.generateLogger(LogTypeEnum.Info)
        Logger.info({
            service: serviceName,
            message: message,
            ...otherObj
        })
    }

    error(serviceName: string, message: string, otherObj: any = {}): void {
        const Logger = this.generateLogger(LogTypeEnum.Error)
        Logger.error({
            service: serviceName,
            message: message,
            ...otherObj
        })
    }

    warn(serviceName: string, message: string, otherObj: any = {}): void {
        const Logger = this.generateLogger(LogTypeEnum.Warn)
        Logger.warn({
            service: serviceName,
            message: message,
            ...otherObj
        })
    }
}

export default WinstonLogger