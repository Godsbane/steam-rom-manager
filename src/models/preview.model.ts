import { Observable, BehaviorSubject } from "rxjs";
import { ImageProviderAPI } from "./user-configuration.model";

export type ImageDownloadStatus = 'notStarted' | 'downloading' | 'done' | 'failed';

export interface ImageContent {
    imageProvider: 'SteamGridDB' | 'SteamScraper' | 'GoogleImages' | 'Steam' | 'LocalStorage',
    imageUploader?: string,
    imageRes?: string,
    imageUrl: string,
    loadStatus: ImageDownloadStatus
};

export interface ImagesStatusAndContent {
    retrieving: boolean,
    defaultImageProviders: string[],
    searchQueries: string[],
    romPath: string,
    imageProviderAPIs: ImageProviderAPI,
    content: ImageContent[]
}

export interface AppImages {
    [extractedTitle: string]: ImagesStatusAndContent
};

export interface PreviewDataAppImage {
    steam: ImageContent,    // 0? index
    default: ImageContent,  // 0-1? index
    imagePool: string,      // 0-2+ index
    imageIndex: number
}

export interface PreviewDataApp {
    entryId: number,
    status: 'add' | 'skip' | 'remove',
    configurationTitle: string,
    parserId: string,
    parserType: string,
    steamCategories: string[],
    imageProviders: string[],
    startInDirectory: string,
    executableLocation: string,
    title: string,
    extractedTitle: string,
    argumentString: string,
    icons: PreviewDataAppImage,
    tallimages: PreviewDataAppImage,
    heroimages: PreviewDataAppImage,
    logoimages: PreviewDataAppImage,
    images: PreviewDataAppImage
}

export interface PreviewDataApps {
    [appID: string]: PreviewDataApp
}

export interface PreviewDataUser {
    username: string,
    apps: PreviewDataApps
}

export interface PreviewData {
    [steamDirectory: string]: {
        [userID: string]: PreviewDataUser
    }
}

export interface PreviewVariables {
    listIsBeingGenerated: boolean,
    listIsBeingSaved: boolean,
    listIsBeingRemoved: boolean,
    numberOfListItems: number,
    numberOfQueriedImages: number

}
