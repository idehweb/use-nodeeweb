console.log('#model product')
export default (mongoose) => {
    const GuaranteecardsSchema = new mongoose.Schema({
        customer: {},
        wjindex: String,
        wjcode: String,
        slcode: String,
        serialno: String,
        brand: String,
        app: String,
        model: String,
        gauranteeco: String,
        prcode: String,
        s_gexpdate: String,
        m_gexpdate: String,
        gaurantee: String,
        buyaccountname: String,
        salername: String,
        m_buydate: {type: Date, default: new Date()},
        m_insdate: {type: Date, default: new Date()},
        guaranteecode: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        statename: String,
        cityname: String,
        s_createdate: String,
        m_createdate: {type: Date, default: new Date()},
        s_gbegdate: String,
        m_gbegdate: {type: Date, default: new Date()},
        webtracecode: String,
        confirmed: {type: Boolean, default: true},
        productvalue: String,

        createdAt: {type: Date, default: new Date()},
        updatedAt: {type: Date, default: new Date()},
        active: {type: Boolean, default: true},
        elements: [],
        responses: [],
        view: {type: Number, default: 1},
        customer:{type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
        admin:{type: mongoose.Schema.Types.ObjectId, ref: 'Admin'} //menu_id

    });
    return GuaranteecardsSchema

};
