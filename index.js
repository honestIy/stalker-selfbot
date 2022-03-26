const Discord = require('discord.js-selfbot');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const client = new Discord.Client();
const id = require("./ids.json")
const hook = require("./hooks.json")
const token = "TOKEN-HERE";

console.log("made by:rain#1000")

// ====================       PERSON1        =========================== //

// normal 
client.on("message", (msg)=>{
  if(msg.author.id === id.person1) {
    function isEmpty(collection) {
        for(var arg in collection) {
            if(collection.hasOwnProperty(arg))
                return false;
        }
        return true;
    }
    var attachment = (msg.attachments).array();
    if(isEmpty(attachment)) {
        var img = "";
    } else {
        var img = attachment[0].url;
    }

const person1 = new Webhook(hook.person1);
  
const hook1 = new MessageBuilder()
.setAuthor(msg.author.tag, msg.author.avatarURL)
.setTitle("MESSAGE:")
.setThumbnail('https://cdn-icons-png.flaticon.com/512/893/893268.png')
.setColor('#01aafe')
.setDescription(msg.content + " " + img)
.setImage(img)
.setFooter("#" + msg.channel.name + " on server " + msg.guild.name, msg.guild.iconURL)
.setTimestamp();    
person1.send(hook1);   
}});


// edited 
client.on("messageUpdate", async(oldMessage, newMessage) => {
  if(newMessage.author.id === id.person1) {
    function isEmpty(collection) {
        for(var arg in collection) {
            if(collection.hasOwnProperty(arg))
                return false;
        }
        return true;
    }
    if (oldMessage.content === newMessage.content) {
        return;
    }

    var attachment = (oldMessage.attachments).array();
    if(isEmpty(attachment)) {
        var img = "";
    } else {
        var img = attachment[0].url;
    }

const person1 = new Webhook(hook.person1);
  
const hook2 = new MessageBuilder()
.setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
.setColor('#ffffff')
.setTitle("EDITED MESSAGE:")
.setThumbnail("https://cdn-icons.flaticon.com/png/512/2356/premium/2356811.png?token=exp=1648150391~hmac=96bad1819048f6a122f5bf523c06c3fe")
.addField("OLD", oldMessage.content + " " + img, true)
.addField("NEW", newMessage.content + " " + img, true)
.setFooter("#" + oldMessage.channel.name + " on server " + oldMessage.guild.name, oldMessage.guild.iconURL)
.setTimestamp();
person1.send(hook2);   
}});

// deleted
client.on("messageDelete", async message => {
  if(message.author.id === id.person1) {
    function isEmpty(collection) {
        for(var arg in collection) {
            if(collection.hasOwnProperty(arg))
                return false;
        }
        return true;
    }
    var attachment = (message.attachments).array();
    if(isEmpty(attachment)) {
        var img = "";
    } else {
        var img = attachment[0].url;
    }

const person1 = new Webhook(hook.person1);
    
const hook3 = new MessageBuilder()
.setAuthor(message.author.tag, message.author.avatarURL)
.setThumbnail("https://cdn-icons-png.flaticon.com/512/6861/6861362.png")
.setColor('#FF0000')
.setTitle("DELETED MESSAGE:")
.setDescription(message.content + " " + img)
.setImage(img)
.setFooter("#" + message.channel.name + " on server " + message.guild.name, message.guild.iconURL)
.setTimestamp();    
person1.send(hook3);   
}});

// ====================       PERSON2        =========================== //

// normal
client.on("message", (msg)=>{
  if(msg.author.id === id.person2) {
    function isEmpty(collection) {
        for(var arg in collection) {
            if(collection.hasOwnProperty(arg))
                return false;
        }
        return true;
    }
    var attachment = (msg.attachments).array();
    if(isEmpty(attachment)) {
        var img = "";
    } else {
        var img = attachment[0].url;
    }

const person2 = new Webhook(hook.person2);
  
const hook1 = new MessageBuilder()
.setAuthor(msg.author.tag, msg.author.avatarURL)
.setTitle("MESSAGE:")
.setThumbnail('https://cdn-icons-png.flaticon.com/512/893/893268.png')
.setColor('#01aafe')
.setDescription(msg.content + " " + img)
.setImage(img)
.setFooter("#" + msg.channel.name + " on server " + msg.guild.name, msg.guild.iconURL)
.setTimestamp();    
person2.send(hook1);   
}});


// edited
client.on("messageUpdate", async(oldMessage, newMessage) => {
  if(newMessage.author.id === id.person2) {
    function isEmpty(collection) {
        for(var arg in collection) {
            if(collection.hasOwnProperty(arg))
                return false;
        }
        return true;
    }
    if (oldMessage.content === newMessage.content) {
        return;
    }

    var attachment = (oldMessage.attachments).array();
    if(isEmpty(attachment)) {
        var img = "";
    } else {
        var img = attachment[0].url;
    }

const person2 = new Webhook(hook.person2);
  
const hook2 = new MessageBuilder()
.setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
.setColor('#ffffff')
.setTitle("EDITED MESSAGE:")
.setThumbnail("https://cdn-icons.flaticon.com/png/512/2356/premium/2356811.png?token=exp=1648150391~hmac=96bad1819048f6a122f5bf523c06c3fe")
.addField("OLD", oldMessage.content + " " + img, true)
.addField("NEW", newMessage.content + " " + img, true)
.setFooter("#" + oldMessage.channel.name + " on server " + oldMessage.guild.name, oldMessage.guild.iconURL)
.setTimestamp();
person2.send(hook2);   
}});

// deleted
client.on("messageDelete", async message => {
  if(message.author.id === id.person2) {
    function isEmpty(collection) {
        for(var arg in collection) {
            if(collection.hasOwnProperty(arg))
                return false;
        }
        return true;
    }
    var attachment = (message.attachments).array();
    if(isEmpty(attachment)) {
        var img = "";
    } else {
        var img = attachment[0].url;
    }

const person2 = new Webhook(hook.person2);
    
const hook3 = new MessageBuilder()
.setAuthor(message.author.tag, message.author.avatarURL)
.setThumbnail("https://cdn-icons-png.flaticon.com/512/6861/6861362.png")
.setColor('#FF0000')
.setTitle("DELETED MESSAGE:")
.setDescription(message.content + " " + img)
.setImage(img)
.setFooter("#" + message.channel.name + " on server " + message.guild.name, message.guild.iconURL)
.setTimestamp();    
person2.send(hook3);   
}});

client.login(token);
