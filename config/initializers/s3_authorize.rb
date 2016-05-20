require 's3/authorize'

s3_authorize = S3::Authorize.new(bucket: 'gkbimages', acl: 'public-read', 'secret_key': ENV["Secret_Access_Key"])

s3_policy = s3_authorize.policy 
puts "********************"
puts s3_policy
puts "********************"


s3_signature = s3_authorize.signature(s3_policy)
puts "********************APPLE"
puts s3_signature
puts "********************"