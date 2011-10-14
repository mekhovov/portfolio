require 'rubygems'
require 'sinatra'

set :public, File.join(File.dirname(__FILE__), 'public')

get '/' do
  File.read('public/index.html')
end

get '/work' do
  File.read('public/index.html')
end

get '/photos' do
  File.read('public/index.html')
end

get '/about' do
  File.read('public/index.html')
end