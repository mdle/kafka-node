var util = require('util');
var EventEmitter = require('events');

function FakeZookeeper () {
  EventEmitter.call(this);

  this.checkPartitionOwnership = function (id, groupId, topic, partition, cb) {
    setImmediate(cb);
  };
  this.deletePartitionOwnership = function (groupId, topic, partition, cb) {
    setImmediate(cb);
  };
  this.addPartitionOwnership = function (id, groupId, topic, partition, cb) {
    setImmediate(cb);
  };
  this.registerConsumer = function (groupId, id, payloads, cb) {
    setImmediate(cb);
  };
  this.listConsumers = function (groupId) {};
  this.getConsumersPerTopic = function (groupId, cb) {
    var consumerTopicMap = {};
    consumerTopicMap[groupId] = [ 'fake-topic' ];
    var topicConsumerMap = { 'fake-topic': [ groupId ] };
    var topicPartitionMap = { 'fake-topic': [ '0', '1', '2' ] };
    var map = {
      consumerTopicMap: consumerTopicMap,
      topicConsumerMap: topicConsumerMap,
      topicPartitionMap: topicPartitionMap
    };

    setImmediate(cb, null, map);
  };
}
util.inherits(FakeZookeeper, EventEmitter);

module.exports = FakeZookeeper;
