var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
try {
  fs.unlinkSync('mavlink_enum.js');
  // file removed
} catch (err) {
  //  console.error(err)
}
var last_value_command;
fs.readFile(
    __dirname + '/../message_definitions/v1.0/release_mechanism.xml',
    function(err, data) {
      parser.parseString(data, function(err, result) {
        buffer = new Buffer.from(
            'mavlink20 = function() {};' +
            '\n');
        fs.appendFile('mavlink_enum.js', buffer.toString(), function(err) {
          if (err) {
            // append failed
          } else {
            // done
          }
        });
        enums = result['mavlink']['enums'];
        enum_ = enums['0']['enum'];
        mav_cmd_entry = enum_['0']['entry'];
        for (const[key, value] of Object.entries(mav_cmd_entry)) {
          for (const[key1, value1] of Object.entries(value)) {
            if (value1.hasOwnProperty('value')) {
              console.log(value1['value']);
              console.log(value1['name']);
              /*fs.writeFile(
                  'mavlink.js', value1['name'] + '=' + value1['value'],
                  function(err) {
                    if (err) return console.log(err);
                  });*/
              buffer = new Buffer.from(
                  'mavlink20.' + value1['name'] + '=' + value1['value'] + ';' +
                  '\n');

              fs.appendFile(
                  'mavlink_enum.js', buffer.toString(), function(err) {
                    if (err) {
                      // append failed
                    } else {
                      // done
                    }
                  });
              last_value_command = parseInt(value1['value'], 10);
            }
          }
        }
        last_value_command = last_value_command + 1;
        buffer = new Buffer.from(
            'mavlink20.' +
            'MAV_CMD_ENUM_END ' +
            '=' + last_value_command.toString() + ';' +
            '\n');
        fs.appendFile('mavlink_enum.js', buffer.toString(), function(err) {
          if (err) {
            // append failed
          } else {
            // done
          }
        });
        // console.dir(mav_cmd_entry);
        console.log('Done');
      });
    });
