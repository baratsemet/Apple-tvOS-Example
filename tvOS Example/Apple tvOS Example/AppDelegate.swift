//
//  AppDelegate.swift
//  Apple tvOS Example
//
//  Created by Barat Semet on 11/9/15.
//  Copyright © 2015 Barat Semet. All rights reserved.
//

import UIKit
import TVMLKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, TVApplicationControllerDelegate {

    var window: UIWindow?
    var appController: TVApplicationController?
    static let TVBaseUrl = "http://localhost:8991/"
    static let TVBootUrl = "\(AppDelegate.TVBaseUrl)js/application.js"
    
    
    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject : AnyObject]?) -> Bool {
        
        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)
        
        let appControllerContext = TVApplicationControllerContext()
        
        if let javaScriptURL = NSURL(string: AppDelegate.TVBootUrl) {
            appControllerContext.javaScriptApplicationURL = javaScriptURL
        }
        
        appControllerContext.launchOptions["BASEURL"] = AppDelegate.TVBaseUrl
        
        if let launchOptions = launchOptions as? [String: AnyObject] {
            for (kind, value) in launchOptions {
                appControllerContext.launchOptions[kind] = value
            }
        }
        
        self.appController = TVApplicationController(context: appControllerContext, window: self.window, delegate: self)
        
        return true
    }
}

