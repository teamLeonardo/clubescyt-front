import { post } from "../api_helper"

export const authService = {

    login: async (payload) => {

        try {

            const url = "/login"

            const data = await post(url, payload)

            if (!data || Object.keys(data).length === 0)
                throw new Error("no llega datos")

            return data

        } catch (error) {
            console.log(error);
            throw error

        }

    },

    register: (payload) => {

    }

}