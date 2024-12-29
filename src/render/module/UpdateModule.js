import UpdateService from "../service/UpdateService";

class UpdateModule {
    constructor() {
        this.ReadyToShow();
        this.UpdateAvailable();
        this.UpdateNotAvailable();
        this.UpdateDownloaded();
        this.Error();
    }

    async ReadyToShow() {
        await UpdateService.ReadyToShow((obj)=>{
            console.log(obj)
        });
    }

    async UpdateAvailable() {
        await UpdateService.UpdateAvailable((obj)=>{
            console.log(obj)
        });
    }

    async UpdateNotAvailable() {

        await UpdateService.UpdateNotAvailable((obj)=>{
            console.log(obj)
        });
    }

    async UpdateDownloaded() {
        await UpdateService.UpdateDownloaded((obj)=>{
            console.log(obj)
        });
    }

    async Error() {
        await UpdateService.Error((obj)=>{
            console.log(obj)
        });
    }
}

export default UpdateModule;