class TranferData {
    constructor(InputData) {
        this.DataTemp = {
            modulename:InputData.modulename,
            nametable: InputData.nametable,
            tabletranslatevn: InputData.tabletranslatevn,
            tabletranslateen: InputData.tabletranslateen,
            author: InputData.author,
            idtask: InputData.idtask,
            datecreate: InputData.datecreate,
            taskdescription: InputData.taskdescription,
            entityfield: InputData.entityfield,
            modelfield: InputData.modelfield,
            gridfield: InputData.gridfield,
            modelsearchfield: InputData.modelsearchfield,
            storenumber: InputData.storenumber,
            enumnumber: InputData.enumnumber,
            numberkeybutton:InputData.numberkeybutton,
            numbercontrol:InputData.numbercontrol
        }
    }
    get getdata() {
        return this.DataTemp;
    }
    SetData(lstData) {
        this.DataTemp = lstData;
        return this.DataTemp;
    }


}

module.exports = TranferData;