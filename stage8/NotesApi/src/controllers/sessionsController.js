
    class sessionsController{
        create(request, response) {
            const {email, password} = request.body;
            return response.json(`Email: ${email} - Password: ${password}`);
        }
    }

    module.exports = sessionsController;