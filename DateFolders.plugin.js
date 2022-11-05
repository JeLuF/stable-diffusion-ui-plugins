// ==UserScript==
// @name         DateFolders
// @version      1.0
// @description  Use human readable timestamps as session IDs instead of microseconds since 1970-01-01
// @author       JeLuF


DateFoldersDate= new Date();
sessionId = DateFoldersDate.toISOString();
