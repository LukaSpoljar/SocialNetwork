import uvicorn
import Shared.HelpFun as helpFun

from ApiRoutes import SocialNetworkAPI

if __name__ == "__main__":
    helpFun.helpFun()
    uvicorn.run(SocialNetworkAPI.app, host="192.168.0.17", port=8000)
