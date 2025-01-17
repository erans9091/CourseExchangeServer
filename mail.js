// Using : courier.com

import { CourierClient } from "@trycourier/courier";

const courier = new CourierClient({ authorizationToken: "pk_prod_QKTA7NVMJNMQ6EQZ9F18Z1TGJTBT" });

const sendEmailOfCycle = async (userMail, courseToGive, toUser, courseToGet, fromUser) => {
    const { requestId } = await courier.send({
        message: {
            to: {
            email: "course.exchange.neta@gmail.com", //userMail
            },
            template: "Q4M18SCYWVMF01GWEES7X365ZFRZ",
            data: {
            user: userMail,
            userToGet: courseToGive,
            courseToGet: toUser,
            userToGive: courseToGet,
            courseToGive: fromUser
            },
        },
    });
};

