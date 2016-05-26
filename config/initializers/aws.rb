# require 's3/authorize'

# s3_authorize = S3::Authorize.new(bucket: 'gkbimages', acl: 'public-read', 'secret_key': '356789032')

# s3_policy = s3_authorize.policy 

# s3_signature = s3_authorize.signature(s3_policy)

s3 = Aws::S3::Resource.new(
	credentials: Aws::Credentials.new(ENV['AWS_Access_Key_ID'], ENV['AWS_Secret_Access_Key']),
	region: 'us-west-1'
	)
S3_BUCKET = s3.bucket(ENV['S3_BUCKET'])

# S3_BUCKET.objects.each do |obj|
#   puts "#{obj.key}"
#   puts "#{obj.etag}"
#   puts obj.public_url
# end

# obj = S3_BUCKET.object('12345/resume')
# obj.upload_file('/Users/oscarvazquez/desktop/bloodgrade1.png', acl:'public-read')
# obj.public_url

# test = S3_BUCKET.object("1234/resume")
# puts test
# puts test.public_url
