# application.properties

## S3

### cloud_aws_credentials_access_key

- cloud.aws.credentials.access-key
- S3 공개키

### cloud_aws_credentials_secret_key

- cloud.aws.credentials.secret-key
- S3 비밀키

### cloud_aws_region_static

- cloud.aws.region.static
- AWS 지역설정

### cloud_aws_s3_bucket

- cloud.aws.s3.bucket
- S3 버킷(파일저장소) 이름

### cloud_aws_stack_auto

- cloud.aws.stack.auto
- CloudFormation 설정

### spring_redis_port

- spring.redis.port
- Redis 포트 설정

### oauth_redirecturi

- oauth.redirectUri
- Oauth 소셜로그인 Redirect URI

### spring_datasource_driver_class_name

- spring.datasource.driver-class-name
- Spring DB 드라이버 이름

### spring_datasource_hikari_maximum_pool_size

- spring.datasource.hikari.maximum-pool-size
- HikariCP 커넥션풀 크기

### spring_datasource_url

- spring.datasource.url
- DB URL

### spring_datasource_username

- spring.datasource.username
- DB 유저네임

### spring_datasource_password

- spring.datasource.password
- DB 비밀번호

### spring_jpa_hibernate_ddl_auto

- spring.jpa.hibernate.ddl-auto
- 스프링부트 서버가 실행되었을떄 JPA가 DB와 엔티티를 비교하여 어떻게 처리할 것인지

### spring_servlet_multipart_max_file_size

- spring.servlet.multipart.max-file-size
- 스프링서버에서 업로드 가능한 최대 파일 사이즈

### spring_servlet_multipart_max_request_size

- spring.servlet.multipart.max-request-size
- 스프링 서버에서의 요청 최대 크기

### spring_servlet_multipart_enabled

- spring.servlet.multipart.enabled
- 스프링에서 multipart사용 여부

### spring_redis_lettuce_pool_max_idle

- spring.redis.lettuce.pool-max-idle
- Redis lettuce 커넥션풀 최대 유휴 연결 수

### spring_redis_lettuce_pool_min_idle

- spring.redis.lettuce.pool-min-idle
- Redis lettuce 커넥션풀 최소 유휴 연결 수

### spring_redis_lettuce_pool_max_active

- spring.redis.lettuce.pool-max-active
- Redis lettuce 커넥션풀 최대 연결 수

### spring_jpa_properties_hibernate_dialect

- spring.jpa.properties.hibernate.dialect
- Hibernate DB 방언 설정(JPA)

### spring_jpa_open_in_view

- spring.jpa.open-in-view
- 스프링의 OSIV설정

## OPENVIDU

### OPENVIDU_URL

- OPENVIDU_URL
- Openvidu 서버 주소

### OPENVIDU_SECRET

- OPENVIDU_SECRET
- OpenVidu 비밀번호

# 프론트엔드 환경변수

## React

### REACT_APP_CLIENT_URL

- REACT_APP_CLIENT_URL
- 리액트 클라이언트 주소

### REACT_APP_SERVER_URL

- REACT_APP_SERVER_URL
- 백엔드 API 서버 주소

## Nodejs

### NODE_OPTIONS

- -max-old-space-size=3072
- nodeJS 메모리 할당
