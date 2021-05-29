# Android programing
### 1. What is “sandboxing” in Android OS?
*todo*
### 2. Explain how permissions work in Android?
*todo*
### 3. Sketch and describe the Android compilation process.
*todo*
### 4. A few years ago Google engineers decided to replace Dalvink, a just-in-time compiler, with ART, an ahead-of-time compiler. Briefly describe the differences and present some reasons that support the engineers’ decision.
*todo*
### 5. What is the purpose of “res” folder in Android projects?
*todo*
### 6. How are non-compiled application resources accessed in Android programmes?
*todo*
### 7. Describe different means of storing data locally in Android applications
*todo*
### 8. What is the meaning of "?" and "!!" before accessing a property of an object in Kotlin?
*todo*
### 9. What is "smart cast" in Kotlin?
*todo*
### 10. What is a companion object in Kotlin?
*todo*
### 11. You are a chief architect of the next most popular app on the market - the app allows users to record videos of themselves singing and dancing over popular tunes. You have to think about data storage for different parts of the app. Decide which method to use to store the following (explain!)
- Video files created by the app
- Audio tracks used during the video generation
- User settings

*todo*
### 12. What are SharedPreferences used for?
*todo*
### 13. Activity lifecycle - draw diagram and clearly mark when activity exists, is visible, in the foreground
*todo*
### 14. Activity lifecycle - why did engineers decide to implement that way
*todo*
### 15. How can we save an activity state and restore it when the activity is recreated?
*todo*
### 16. Assume that each of the lifecycle callbacks (onCreate, onStart, etc.) print an associated log message with the callback and the activity name when called (e.g. “onCreate from Activity 1”, “onStart from Activity 1”, etc.). Write one after another all the log messages that will be printed at the end of the example shown in the figure: https://bit.ly/2Ei4X29
*todo*
### 17. What are Android Intents used for?
*todo*
### 18. Describe implicit and explicit intents
*todo*
### 19. How are implicit Intents resolved?
*todo*
### 20. Where can IntentFilters be specified?
*todo*
### 20,5. Sketch code that calls a function doSomething() when a user clicks on a button in an Activity.
*todo*
### 21. What is the MainLooper?
*todo*
### 22. Describe the difference between match_parent and wrap_content
*todo*
### 23. How are views organised in Android
*todo*
### 24. Discuss the difference between Fragments and Activities
*todo*
### 25. How can we share information among different fragments of the same app (connected to the same Activity).
*todo*
### 26. Describe the best design practices in asking users for permissions in Android applications.
*todo*
### 27. Name two different approaches to implementing concurrency in Android and briefly describe them (pick only two)
*todo*
### 28. What is IntentService and what is it used for?
*todo*
### 29. How do you handle results from IntentService?
*todo*
### 30. What is the difference between IntentService and JobIntentService?
*todo*
### 31. Describe the basics of AsyncTask
*todo*
### 32. You are a chief architect of a mobile sensing app that is used to help telecoms get a better idea of the LTE network coverage. The app runs a network connectivity speed test and saves the result to the local database. When a user is connected on WiFi, the app uploads the data to the server.
- Explain how you would implement network connectivity speed testing so that it starts when a user clicks on a button, runs the test in the background, and then shows the result back to the user, when ready.
- Explain how you would implement upload on the server, so that it doesn’t conflict with the regular app use.

*todo*
### 33. You are a chief architect of a mobile music player. The app should play music even when the user is not actively using your app, even when the user is not using the phone. Which class would you use for running the music player? Why?
*todo*
### 34. Explain Threads and Handlers
*todo*
### 35. Which of the following is true for Service class:
- Service by default runs on the main thread
- Calling an Intent in order to start a service, will, if the Service is already running, skip onCreate and just call onStart
- Service can be bound to another component through onBind call
- Service can be run in either background or foreground

*todo*
### 36. What is a wake lock? Explain how to acquire it and release it.
*todo*
### 37. Describe the main functionalities of AlarmManager
*todo*
### 38. Why are tasks scheduled via WorkManager more energy efficient than tasks scheduled via AlarmManager?
*todo*
### 39. List and briefly describe different scales of mobile sensing applications
*todo*
### 40. Describe one application in each of the listed scale categories
*todo*
### 41. Explain why background processing is important in mobile computing (in particular for mobile sensing)
*todo*
### 42. How would you design an application for detecting face-to-face conversation and frequency?
*todo*
### 43. How would you design an application for inferring sleep duration?
*todo*
### 44. How would you design a contact tracing app for epidemiology research? Ensure that the app is as much privacy-preserving as possible.
*todo*
### 45. Describe adaptive duty cycling,
*todo*
### 46. Explain what hierarchical sensor activation is.
*todo*
### 47. Describe the process of inferring a smartphone user’s physical activity from sensor readings.
*todo*
### 48. Explain how InterruptMe project uses mobile sensing and machine learning or propose own approach towards inferring interruptibility of a mobile user
*todo*
### 49. Give an example of an Android app designed with the MVC paradigm. Exaplain what "M", "V", and "C" are in this case.
*todo*
### 50. What is the drawback of MVC in Android? What is the alternative?
*todo*
### 51. Describe the components you would use in an app where the data are not stored in persistent storage (e.g. database, SharedPreferences), but they have to survive configuration changes (phone rotation).
*todo*
### 52. What is LiveData? Describe a use case for LiveData in an Android app.
*todo*
### 53. Draw a diagram and describe the data flow of a modern Android app using a Room database.
*todo*
### 54. What is the purpose of Object-Relational Mapping?
*todo*
### 55. Pick two wireless technologies supported by modern smartphones and discuss their range, power requirements, throughput, and list at least one application where each of the technologies might be used.
*todo*
### 56. What are the benefits of OkHttp versus HttpUrlConnect method for accessing remote APIs?
*todo*
### 57. You are designing an app that helps a user find a place to park a car. How would you communicate the data about the spot vacancy from the server to your app in the most efficient way?
*todo*
### 58. List the benefits of hybrid application development.
*todo*
### 59. What is the purpose of plugins in Apache Cordova?
*todo*